interface ItemProps {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}
// children?: React.ReactNode | React.ReactNode[]
function ListTest({items}: {items: ItemProps[]}) {
  return (
    <div className="flex flex-col items-center justify-center">
      {items?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center font-nunito"
        >
          {item.title}
        </div>
      ))}
    </div>
  )
}

export default ListTest
