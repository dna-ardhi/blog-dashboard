import Dashboard from '@/layouts/Dashboard';
import BaseComponentProps from '@/models/BaseComponentProps';

export default function DashboardLayout({
  children,
}: Readonly<BaseComponentProps>) {
  return <Dashboard>{children}</Dashboard>;
}
