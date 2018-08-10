export const LOCAL_STORAGE_KEY = {
  AUTH: 'range-web-auth',
  USER: 'range-web-user',
  REFERENCE: 'range-web-reference',
};

export const TOAST_TIMEOUT = 9000;

export const PLAN_STATUS = {
  PENDING: 'P',
  COMPLETED: 'O',
  DRAFT: 'D',
  CREATED: 'C',
  CHANGE_REQUESTED: 'R',
  STAFF_DRAFT: 'SD',
  WRONGLY_MADE_WITHOUT_EFFECT: 'WM',
  STANDS_WRONGLY_MADE: 'SW',
  STANDS: 'S',
  NOT_APPROVED_FURTHER_WORK_REQUIRED: 'NF',
  NOT_APPROVED: 'NA',
  APPROVED: 'A',
};

export const AMENDMENT_TYPE = {
  MINOR: 'MNA',
  MANDATORY: 'MA',
  INITIAL: 'A',
};

export const REFERENCE_KEY = {
  AGREEMENT_EXEMPTION_STATUS: 'AGREEMENT_EXEMPTION_STATUS',
  AGREEMENT_TYPE: 'AGREEMENT_TYPE',
  PLAN_STATUS: 'PLAN_STATUS',
  LIVESTOCK_TYPE: 'LIVESTOCK_TYPE',
  LIVESTOCK_IDENTIFIER_TYPE: 'LIVESTOCK_IDENTIFIER_TYPE',
  MINISTER_ISSUE_TYPE: 'MINISTER_ISSUE_TYPE',
  MINISTER_ISSUE_ACTION_TYPE: 'MINISTER_ISSUE_ACTION_TYPE',
  CLIENT_TYPE: 'CLIENT_TYPE',
  AMENDMENT_TYPE: 'AMENDMENT_TYPE',
};

export const IMAGE_SRC = {
  NAV_LOGO: '/logo.png',
  COW_PIC: '/cow.jpg',
  LOGIN_LOGO: '/login_logo.png',
};

export const CLIENT_TYPE = {
  PRIMARY: 'A',
  OTHER: 'B',
};

export const DATE_FORMAT = {
  SERVER_SIDE: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
  CLIENT_SIDE: 'MMMM D, YYYY',
  CLIENT_SIDE_WITHOUT_YEAR: 'MMM D',
};

export const USER_ROLE = {
  ADMINISTRATOR: 'myra_admin',
  RANGE_OFFICER: 'myra_range_officer',
  AGREEMENT_HOLDER: 'myra_client',
};

export const ELEMENT_ID = {
  GRAZING_SCHEDULE: 'rup__grazing-schedule',
  RUP_ZONE_DROPDOWN: 'rup__zone-dropdown',
  RUP_STICKY_HEADER: 'rup-sticky-header',
  SIGN_OUT: 'sign-out',
  MANAGE_ZONE_ZONES_DROPDOWN: 'manage-zone__zone-dropdown',
  MANAGE_ZONE_CONTACTS_DROPDOWN: 'manage-zone__contact-dropdown',
  LOGIN_BUTTON: 'login-button',
  LOGIN_IDIR_BUTTON: 'login-idir-button',
  LOGIN_BCEID_BUTTON: 'login-bceid-button',
  SEARCH_TERM: 'searchTerm',
  MANAGE_CLIENT_USERS_DROPDOWN: 'manage-client__users-dropdown',
  MANAGE_CLIENT_CLIENTS_DROPDOWN: 'manage-client__clients-dropdown',
};
