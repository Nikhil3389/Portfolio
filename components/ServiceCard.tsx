import {FunctionComponent} from 'react';
import { IService } from '../type';

const ServiceCard:FunctionComponent<{service:IService}> = ({
    service:{Icon,about,title},



}) =>{

    const createMarkup = ()=> {
        return{
            __html:about,
        }
    }
    return (
        <div className='flex p-2 items-centerspace-x-4'>
            <Icon className='w-12 h-12 px-2 py-2 text-green '/>
            <div>
                <h4 className='font-bold'>{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()}/>
            </div>

        </div>
    )
}
export default ServiceCard