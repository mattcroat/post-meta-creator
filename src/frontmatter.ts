import { getDate, kebabCase, removeSpaces } from './utils'

type Values = typeof state

const titleElement = document.querySelector<HTMLInputElement>('[data-title]')!
const titleDescription = document.querySelector<HTMLInputElement>(
  '[data-description]'
)!
const categoryElement = document.querySelector<HTMLSelectElement>(
  '[data-category]'
)!
const preElement = document.querySelector<HTMLPreElement>('[data-frontmatter]')!
const copyElement = document.querySelector<HTMLButtonElement>('[data-copy]')!

const state = {
  title: 'Title',
  description: 'Description',
  date: getDate(),
  category: 'css',
}

function frontmatter(values: Values) {
  const { title, description, date, category } = values
  const frontmatter = `
    ---
    title: ${title}
    description: ${description}
    published: '${date}'
    category: '${category}'
    image: '/images/${kebabCase(title)}/og-image.webp'
    ---

    # ${title}
  `.trim()
  return removeSpaces(frontmatter)
}

titleElement.addEventListener('input', (event: Event) => {
  state.title = (event?.target as HTMLInputElement).value
  preElement.innerHTML = frontmatter(state)
})

titleDescription.addEventListener('input', (event: Event) => {
  state.description = (event?.target as HTMLInputElement).value
  preElement.innerHTML = frontmatter(state)
})

categoryElement.addEventListener('change', (event) => {
  state.category = (event?.target as HTMLSelectElement).value
  preElement.innerHTML = frontmatter(state)
})

copyElement.addEventListener('click', () => {
  const value = preElement.innerText
  navigator.clipboard.writeText(value)
})

preElement.innerText = frontmatter(state)
