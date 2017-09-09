import { EmployeecontrolPage } from './app.po';

describe('employeecontrol App', () => {
  let page: EmployeecontrolPage;

  beforeEach(() => {
    page = new EmployeecontrolPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
