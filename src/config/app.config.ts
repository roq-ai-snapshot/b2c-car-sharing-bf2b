interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Customer Service Representative'],
  customerRoles: ['Guest'],
  tenantRoles: [
    'Business Owner',
    'Operations Manager',
    'Operations Staff',
    'Customer Service Representative',
    'End Customer',
  ],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read car information',
    'View available bookings',
    'Access customer service',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Manage car information',
    'Manage booking information',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/af5f188d-dd1e-4c30-a262-10ade954ffac',
};
