'use client';

import CountUp from 'react-countup';

function AnimatedCounter({amount} : {amount: number}) {
  return (
    <div className='w-full'>
        <CountUp 
            duration={2}
            decimals={2}
            decimal=","
            prefix="$"
            end={amount} />
    </div>
  )
}

export default AnimatedCounter