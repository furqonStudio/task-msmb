import { Image } from 'expo-image'

export default function CustomImage() {
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

  return (
    <Image
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: '#0553',
      }}
      source={require('assets/images/clients-1.png')}
      placeholder={{ blurhash }}
      contentFit="cover"
      transition={1000}
    />
  )
}
