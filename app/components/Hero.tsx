import Image from 'next/image'

export default function Hero() {
  return (
    <section className="w-full mx-auto">
      <Image
        src="/people-03.png"
        width={200}
        height={200}
        alt="Samuel Essilfie"
        priority={true}
      />
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋🏽&nbsp;
        <span className="whitespace-nowrap">I'm <span className="font-bold">Samuel</span>
        </span>
      </p>
    </section>
  )
}