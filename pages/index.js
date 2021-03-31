import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      Hello World.{' '}
      <Link href="/search">
        <a>About</a>
      </Link>
    </div>
  )
}
