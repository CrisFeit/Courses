function formatDate(item) {
    const date = new Date()
    return Intl.DateTimeFormat('en-US', {
        timeZone: 'UTC',
        hour12: true,
        hour: "numeric"

    }).format(date.setUTCHours(item))
}

export default {
    default: {
        open: formatDate(11),
        closed: formatDate(22),
    },
    monday: null,
    sunday: {
        open: formatDate(12),
        closed: formatDate(20),
    },
}