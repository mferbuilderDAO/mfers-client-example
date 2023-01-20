import { useNFT } from '@zoralabs/nft-hooks'
import './App.css'

const MFER_ID = '3191' // change this to fetch & render a different mfer!
const MFERS_CONTRACT = '0x79FCDEF22feeD20eDDacbB2587640e45491b757f'

export default function App() {
  const { data, error } = useNFT(MFERS_CONTRACT, MFER_ID)

  console.info('result', { data, error })

  if (error) return <h1>error!</h1>

  if (!data) return <h1>fetching...</h1>

  return (
    <div className='App'>
      <h1>{data?.metadata?.name}</h1>
      <h3>{data?.metadata?.description}</h3>
      <img src={data?.media?.thumbnail?.uri} />
      <br />
      <small>owner: {data?.nft?.owner?.address}</small>
    </div>
  )
}
