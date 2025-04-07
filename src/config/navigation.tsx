import { AccountIcon } from '~/components/ui/icons/account';
import { CompanyIcon } from '~/components/ui/icons/company';
import { ContractorIcon } from '~/components/ui/icons/contractor';
import type { IconElement } from '~/components/ui/icons/types';

type NavigationItem = {
  href: string;
  label: string;
  icon: IconElement;
};

const cemeteryNavigation = {
  organizations: {
    href: '#',
    label: 'Organizations',
    icon: CompanyIcon,
  },
  contractors: {
    href: '#',
    label: 'Contractors',
    icon: ContractorIcon,
  },
  clients: {
    href: '#',
    label: 'Clients',
    icon: AccountIcon,
  },
} satisfies Record<string, NavigationItem>;

export { cemeteryNavigation };
