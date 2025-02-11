import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import BackupTableTwoToneIcon from '@mui/icons-material/BackupTableTwoTone';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';

const menuItems = [
  {
    heading: '',
    items: [
      {
        name: 'Blueprints',
        icon: BackupTableTwoToneIcon,
        badge: 'v3',
        items: [
          {
            name: 'Extended Sidebar',
            link: '/dashboards/reports',
            badge: 'v3.0',
            badgeTooltip: 'Added in version 3.0'
          },
          {
            name: 'Accent Header',
            link: '/blueprints/accent-header/dashboards/reports',
            badge: '',
            badgeTooltip: 'Updated'
          },
          {
            name: 'Accent Sidebar',
            link: '/blueprints/accent-sidebar/dashboards/reports'
          },
          {
            name: 'Boxed Sidebar',
            link: '/blueprints/boxed-sidebar/dashboards/reports'
          },
          {
            name: 'Collapsed Sidebar',
            link: '/blueprints/collapsed-sidebar/dashboards/reports'
          },
          {
            name: 'Bottom Navigation',
            link: '/blueprints/bottom-navigation/dashboards/reports'
          },
          {
            name: 'Top Navigation',
            link: '/blueprints/top-navigation/dashboards/reports'
          }
        ]
      },
      {
        name: 'Dashboards',
        icon: SmartToyTwoToneIcon,
        link: '/blueprints/bottom-navigation/dashboards',
        items: [
          {
            name: 'Reports',
            link: '/blueprints/bottom-navigation/dashboards/reports',
            badge: '',
            badgeTooltip: 'Dot indicator with example tooltip'
          },
          {
            name: 'Expenses',
            link: '/blueprints/bottom-navigation/dashboards/expenses',
            badge: ''
          },
          {
            name: 'Products',
            link: '/blueprints/bottom-navigation/dashboards/products'
          },
          {
            name: 'Statistics',
            link: '/blueprints/bottom-navigation/dashboards/statistics'
          },
          {
            name: 'Automation',
            link: '/blueprints/bottom-navigation/dashboards/automation'
          },
          {
            name: 'Analytics',
            link: '/blueprints/bottom-navigation/dashboards/analytics'
          },
          {
            name: 'Banking',
            link: '/blueprints/bottom-navigation/dashboards/banking'
          },
          {
            name: 'Commerce',
            link: '/blueprints/bottom-navigation/dashboards/commerce'
          },
          {
            name: 'Crypto',
            link: '/blueprints/bottom-navigation/dashboards/crypto'
          },
          {
            name: 'Finance',
            link: '/blueprints/bottom-navigation/dashboards/finance'
          },
          {
            name: 'Fitness',
            link: '/blueprints/bottom-navigation/dashboards/fitness'
          },
          {
            name: 'Doctors',
            link: '/blueprints/bottom-navigation/dashboards/healthcare/doctor'
          },
          {
            name: 'Hospital',
            link: '/blueprints/bottom-navigation/dashboards/healthcare/hospital'
          },
          {
            name: 'Helpdesk',
            link: '/blueprints/bottom-navigation/dashboards/helpdesk'
          },
          {
            name: 'Learning',
            link: '/blueprints/bottom-navigation/dashboards/learning'
          },
          {
            name: 'Monitoring',
            link: '/blueprints/bottom-navigation/dashboards/monitoring'
          },
          {
            name: 'Tasks',
            link: '/blueprints/bottom-navigation/dashboards/tasks'
          }
        ]
      },
      {
        name: 'Auth Pages',
        icon: VpnKeyTwoToneIcon,
        items: [
          {
            name: 'Login Basic',
            link: '/auth/login/basic?demo=true'
          },
          {
            name: 'Login Cover',
            link: '/auth/login/cover?demo=true'
          },
          {
            name: 'Register Basic',
            link: '/auth/register/basic?demo=true'
          },
          {
            name: 'Register Cover',
            link: '/auth/register/cover?demo=true'
          },
          {
            name: 'Register Wizard',
            link: '/auth/register/wizard?demo=true'
          },
          {
            name: 'Recover Password',
            link: '/auth/recover-password?demo=true'
          }
        ]
      },
      {
        name: 'Status',
        icon: ErrorTwoToneIcon,
        items: [
          {
            name: 'Error 404',
            link: '/status/404'
          },
          {
            name: 'Error 500',
            link: '/status/500'
          },
          {
            name: 'Maintenance',
            link: '/status/maintenance'
          },
          {
            name: 'Coming Soon',
            link: '/status/coming-soon'
          }
        ]
      },
      {
        name: 'Overview',
        link: '/',
        icon: DesignServicesTwoToneIcon
      },
      {
        name: 'Documentation',
        icon: SupportTwoToneIcon,
        link: '/docs'
      }
    ]
  }
];

export default menuItems;
