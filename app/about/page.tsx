import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <main>
        <div className="text-center mb-10">
          <h1 className="font-medium text-lg">About me</h1>
        </div>
        <section className="flex justify-between flex-col gap-0 xl:flex-row sm:gap-6">
          <div>
            <p>
              I work with website development, and I study technologies to build beautiful and
              well-structured applications.
            </p>
            <p className="mt-6 mb-2">Some technologies I work with and that I'm studying: </p>
            <ul className="list-disc ml-4">
              <li>Nuxt.js</li>
              <li>Vue.js</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Angular</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>C-Sharp</li>
            </ul>
            <p className="mt-6 mb-2">Some interests:</p>
            <ul className="list-disc ml-4">
              <li>Design</li>
              <li>Games</li>
              <li>Art</li>
              <li>Series</li>
            </ul>
          </div>
          <div>
            <Image
              className="rounded"
              src="/static/images/dith.png"
              width={450}
              height={450}
              alt="Picture"
            />
          </div>
        </section>
      </main>
    </>
  )
}
