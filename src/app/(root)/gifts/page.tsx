import Similar from '../_components/global/similar'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gifts",
};
const Gift = ()=> {
    return (
        <div>
            <Similar heading='Gifts' para='Discover the perfect gift for any occasion with our elegant jewellery selection. Make every celebration memorable' button='Shop All' />
        </div>
    )
}

export default Gift