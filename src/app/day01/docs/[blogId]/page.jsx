
async function catchall({params}) {

    const {blogId} = await params;

  return (
    <div className='text-5xl font-bold text-red-600 mt-50'>{blogId}</div>
  )
}

export default catchall