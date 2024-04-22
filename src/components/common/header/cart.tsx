import { ShoppingBagIcon } from 'lucide-react';

export default function Cart() {
  return (
    <a href='' className='flex items-center gap-2 pl-3'>
      <ShoppingBagIcon /> <span>Cart</span>
    </a>
  );
}
