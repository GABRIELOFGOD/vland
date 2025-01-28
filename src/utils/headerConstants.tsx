import { IHeaderList } from "@/model/HeaderTypes";
import { FaPlus, FaShare } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

export 
const headerList: IHeaderList[] = [
  {
    id: 1,
    name: 'Home',
    icon: <GoHomeFill />,
    path: '/'
  },
  {
    id: 2,
    name: 'Add property',
    icon: <FaPlus />,
    path: '/add-property'
  },
  {
    id: 3,
    name: 'Referrals',
    icon: <FaShare />,
    path: '/referrals'
  }
]