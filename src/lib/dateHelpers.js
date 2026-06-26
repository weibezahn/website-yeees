export const formatDate = (dateString) => {
  if (!dateString) return ''
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
