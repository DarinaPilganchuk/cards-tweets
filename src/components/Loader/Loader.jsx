import { Hearts  } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export default function Loader() {
  return (
    <Wrapper>
      <Hearts 
  height="80"
  width="80"
  color="##471CA9"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </Wrapper>
  );
}