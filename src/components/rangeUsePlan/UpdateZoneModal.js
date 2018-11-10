import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Header, Button, Dropdown, Modal, Icon } from 'semantic-ui-react';
import { updateAgreementZone } from '../../actionCreators';
import { ELEMENT_ID } from '../../constants/variables';
import { getZones, getIsUpdatingAgreementZone } from '../../reducers/rootReducer';
import { planUpdated } from '../../actions';

export class UpdateZoneModal extends Component {
  static propTypes = {
    agreement: PropTypes.shape({ zone: PropTypes.object }).isRequired,
    plan: PropTypes.shape({}).isRequired,
    isUpdateZoneModalOpen: PropTypes.bool.isRequired,
    closeUpdateZoneModal: PropTypes.func.isRequired,
    updateAgreementZone: PropTypes.func.isRequired,
    zones: PropTypes.arrayOf(PropTypes.object).isRequired,
    isUpdatingAgreementZone: PropTypes.bool.isRequired,
    planUpdated: PropTypes.func.isRequired,
  };

  state = {
    newZoneId: null,
  }

  onZoneChanged = (e, { value }) => {
    this.setState({ newZoneId: value });
  }

  onUpdateZoneClicked = () => {
    const { agreement, updateAgreementZone, planUpdated, plan } = this.props;
    const requestData = {
      agreementId: agreement.id,
      zoneId: this.state.newZoneId,
    };
    const onZoneUpdated = (newZone) => {
      const newAgreement = { ...plan.agreement, zone: newZone };
      const newPlan = {
        ...plan,
        agreement: newAgreement,
      };
      planUpdated({ plan: newPlan });
    };
    updateAgreementZone(requestData).then((newZone) => {
      onZoneUpdated(newZone);
      this.closeUpdateZoneModal();
    });
  }

  closeUpdateZoneModal = () => {
    this.setState({ newZoneId: null });
    this.props.closeUpdateZoneModal();
  }

  render() {
    const {
      isUpdateZoneModalOpen,
      zones,
      isUpdatingAgreementZone,
      agreement,
    } = this.props;
    const { newZoneId } = this.state;

    const currZone = agreement && agreement.zone;
    const currDistrictId = currZone.district && currZone.district.id;
    const currZoneCode = currZone.code;
    const zoneOptions = zones
      .filter(zone => (zone.districtId === currDistrictId) && (zone.code !== currZoneCode))
      .map((z) => {
        const { id, code, description } = z;
        const zone = {
          key: id,
          text: code,
          value: id,
          description,
        };
        return zone;
      });

    return (
      <Modal
        dimmer="blurring"
        open={isUpdateZoneModalOpen}
        onClose={this.closeUpdateZoneModal}
        closeIcon={<Icon name="close" color="black" />}
      >
        <Modal.Header>Update Zone</Modal.Header>
        <Modal.Content>
          <Header>Pick a new zone within the district</Header>
          <Dropdown
            id={ELEMENT_ID.RUP_ZONE_DROPDOWN}
            placeholder="Zone"
            options={zoneOptions}
            onChange={this.onZoneChanged}
            fluid
            search
            selection
            clearable
          />
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" inverted onClick={this.closeUpdateZoneModal}>
            Cancel
          </Button>
          <Button
            color="green"
            inverted
            disabled={newZoneId === null}
            loading={isUpdatingAgreementZone}
            onClick={this.onUpdateZoneClicked}
          >
            Update Zone
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = state => (
  {
    isUpdatingAgreementZone: getIsUpdatingAgreementZone(state),
    zones: getZones(state),
  }
);

export default connect(mapStateToProps, {
  updateAgreementZone,
  planUpdated,
})(UpdateZoneModal);
