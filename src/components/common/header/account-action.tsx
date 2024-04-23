import { UserIcon } from 'lucide-react';

export default function AccountAction() {
  return (
    <a href='' className='flex items-center gap-2 pr-3'>
      <UserIcon /> <span>Account</span>
    </a>
  );
}
