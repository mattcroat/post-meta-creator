export function getDate() {
  const [month, day, year] = new Date()
    .toLocaleString('en', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })
    .split('/')

  return `${year}-${month}-${day}`
}

export function removeSpaces(frontmatter: string) {
  return frontmatter.replace(/^ {4}/gm, '')
}

export function kebabCase(text: string) {
  return text.toLowerCase().replaceAll(/ /g, '-')
}
