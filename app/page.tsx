import Image from 'next/image';
import svecw from './svecw.jpg'

export default function Home() {
  return (
    <>
      <div>
        <Image
          src={svecw} 
          alt="college"
          width={1500}
          height={600}
        />
      </div>
    </>
  );
}
