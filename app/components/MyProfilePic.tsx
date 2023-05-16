import Image from 'next/image'

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        src="/people-03.png"
        width={200}
        height={200}
        alt="Samuel Essilfie"
        priority={true}
      />
    </section>
  )
}