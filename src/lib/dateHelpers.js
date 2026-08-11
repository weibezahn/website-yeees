const seasonDateRegex = /^(spring|autumn)-(\d{4})$/i

export const isSeasonDateString = (dateString) => typeof dateString === 'string' && seasonDateRegex.test(dateString)

export const formatSeasonDate = (dateString) => {
  const match = seasonDateRegex.exec(String(dateString || '').trim())
  if (!match) return dateString
  const season = match[1].toLowerCase()
  const year = match[2]
  return `${season.charAt(0).toUpperCase()}${season.slice(1)} ${year}`
}

export const parseEventDate = (dateString) => {
  if (!dateString) return null
  const dateValue = new Date(String(dateString).trim())
  if (!Number.isNaN(dateValue.getTime())) return dateValue

  const match = seasonDateRegex.exec(String(dateString).trim())
  if (!match) return null

  const season = match[1].toLowerCase()
  const year = Number(match[2])
  const month = season === 'spring' ? 3 : 9
  return new Date(year, month, 1)
}

export const getEventId = (event) => {
  if (!event) return null
  const slug = String(event.slug || '')
  const slugMatch = slug.match(/(\d+)$/)
  if (slugMatch) return Number(slugMatch[1])
  const title = String(event.title || '')
  const titleMatch = title.match(/(\d+)$/)
  if (titleMatch) return Number(titleMatch[1])
  return null
}

export const compareEvents = (a, b) => {
  const aDate = parseEventDate(a?.startDate)
  const bDate = parseEventDate(b?.startDate)

  if (aDate && bDate) {
    const diff = aDate - bDate
    if (diff !== 0) return diff
  } else if (aDate) {
    return -1
  } else if (bDate) {
    return 1
  }

  const aId = getEventId(a) || 0
  const bId = getEventId(b) || 0
  return aId - bId
}

export const formatDate = (dateString) => {
  if (!dateString) return ''
  if (isSeasonDateString(dateString)) return formatSeasonDate(dateString)
  const date = new Date(dateString)
  if (Number.isNaN(date.getTime())) return dateString
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export const formatDateRange = (startDate, endDate) => {
  if (!startDate || !endDate) return ''
  return `${formatDate(startDate)} — ${formatDate(endDate)}`
}
