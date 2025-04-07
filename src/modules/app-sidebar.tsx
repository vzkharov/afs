import { SearchIcon } from '~/components/ui/icons/search';
import { CompanyIcon } from '~/components/ui/icons/company';
import { SignOutIcon } from '~/components/ui/icons/sign-out';
import { SettingsIcon } from '~/components/ui/icons/settings';

import { Logo } from '~/components/logo';
import { Sidebar, SidebarColumn, SidebarLink } from '~/components/sidebar';

const AppSidebar = () => (
  <Sidebar>
    <SidebarColumn>
      <Logo />

      <SidebarLink active>
        <CompanyIcon size={20} />
      </SidebarLink>

      <SidebarLink>
        <SearchIcon size={20} />
      </SidebarLink>
    </SidebarColumn>
    <SidebarColumn>
      <SidebarLink>
        <SettingsIcon size={20} />
      </SidebarLink>

      <SidebarLink>
        <SignOutIcon size={20} />
      </SidebarLink>
    </SidebarColumn>
  </Sidebar>
);

export { AppSidebar };
