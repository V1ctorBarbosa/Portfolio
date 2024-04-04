//Icons
import { Home, Handshake, Cpu, Code, MessageCircle } from 'lucide-react';

//Types
import { INavData } from '../nav.types';

export const navData: INavData[] = [
    {   
        id: '#home',
        icon: <Home size={30}/>
    },
    {
        id: '#experience',
        icon: <Handshake size={30} />
    },
    {
        id: '#techs',
        icon: <Cpu size={30} />
    },
    {
        id: '#projects',
        icon: <Code size={30} />
    },
    {
        id: '#contact',
        icon: <MessageCircle size={30}/>
    }
]