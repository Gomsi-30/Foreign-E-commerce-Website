import Similar from '../_components/global/similar'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Favourites",
};
const Favourite = ()=> {
    return (
        <div>
            <Similar heading='Gifts' para={`Revisit and shop your favourite pieces from our collection. Whether it's a ring, or any treasured item enjoy the jewellery you love most`} button='Shop All' />
        </div>
    )
}

export default Favourite