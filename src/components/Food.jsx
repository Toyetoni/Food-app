import React from 'react'

const Food = () => {
  return (

    <div className='max-w-[1640px] mx-auto px-4'>

      <h1 className='text-orange-600 font-bold text-center text-4xl'>Top rated Menu Item</h1>

      {/* filter row */}
      <div>
        {/* filter type */}
        <div>
            <p className='font-bold text-gray-700'>Filter type</p>

          <div className='flex justify-between flex-wrap'>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer'>All</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer'>Burgers</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer'>Pizza</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer'>Salads</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer'>Chicken</button>
          </div>
        </div>
        {/* filter price */}
        <div>
        <p className='font-bold text-gray-700'>Filter price</p>

          <div className='flex justify-between flex-wrap'>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer'>$</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer'>$$</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer'>$$$</button>
            <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white cursor-pointer'>$$$$</button>
        </div>
      </div>
      </div>
</div>
    
  )
}

export default Food

         