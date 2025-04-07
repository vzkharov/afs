import { cemeteryNavigation } from '~/config/navigation';

import {
  SegmentSidebar,
  SegmentSidebarFooter,
  SegmentSidebarHeader,
  SegmentSidebarLink,
  SegmentSidebarNavigation,
} from '~/components/segment-sidebar';
import { Separator } from '~/components/ui/separator';

import { getCurrentYear } from '~/utils/datetime';

const CemeterySidebar = () => (
  <SegmentSidebar>
    <SegmentSidebarHeader
      title='Oak Tree Cemetery'
      description='Process Manager'
    />
    <Separator />
    <SegmentSidebarNavigation>
      {[cemeteryNavigation.organizations, cemeteryNavigation.contractors, cemeteryNavigation.clients].map(
        (item, idx) => (
          <SegmentSidebarLink
            key={idx}
            href={item.href}
            label={item.label}
            active={item.label === cemeteryNavigation.organizations.label}
            icon={<item.icon size={20} />}
          />
        )
      )}
    </SegmentSidebarNavigation>
    <SegmentSidebarFooter>All Funeral Services © 2015-{getCurrentYear()}</SegmentSidebarFooter>
  </SegmentSidebar>
);

export { CemeterySidebar };
