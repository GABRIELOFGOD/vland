import { IHeaderList } from "@/model/HeaderTypes";
import { FaPlus, FaShare } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { RiNftLine } from "react-icons/ri";

export 
const headerList: IHeaderList[] = [
  {
    id: 1,
    name: 'Home',
    icon: <GoHomeFill />,
    path: '/'
  },
  {
    id: 4,
    name: 'NFTs',
    icon: <RiNftLine />,
    path: '/nfts'
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
  },
]