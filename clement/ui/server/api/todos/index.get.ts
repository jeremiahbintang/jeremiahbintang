export default defineEventHandler((event) => {
    const query : { start: string, end: string } = getQuery(event)

    const dates = [
        {
            id: 1,
            userId: 1,
            title: "aasljfh auhwo auhous dfpuaf piausgdf asdf",
            createdAt: "2025-06-28T10:29:06Z",
            deadline: "2025-07-07T10:29:06Z"
        },
        {
            id: 2,
            userId: 1,
            title: "aasljfh auhwo auhous dfpuaf piausgdf asdf",
            createdAt: "2025-06-28T10:29:06Z",
            deadline: "2025-07-07T10:29:06Z"
        },
        {
            id: 3,
            userId: 1,
            title: "aasljfh auhwo auhous dfpuaf piausgdf asdf",
            createdAt: "2025-06-28T10:29:06Z",
            deadline: "2025-07-07T10:29:06Z"
        },
        {
            id: 4,
            userId: 1,
            title: "aasljfh auhwo auhous dfpuaf piausgdf asdf",
            createdAt: "2025-06-28T10:29:06Z",
            deadline: "2025-07-07T10:29:06Z"
        },
        {
            id: 5,
            userId: 1,
            title: "aasljfh auhwo auhous dfpuaf piausgdf asdf",
            createdAt: "2025-06-28T10:29:06Z",
            deadline: "2025-07-07T10:29:06Z"
        },
        {
            id: 6,
            userId: 1,
            title: "aasljfh auhwo auhous dfpuaf piausgdf asdf",
            createdAt: "2025-06-28T10:29:06Z",
            deadline: "2025-07-07T10:29:06Z"
        },
        {
            id: 7,
            userId: 1,
            title: "aasljfh auhwo auhous dfpuaf piausgdf asdf",
            createdAt: "2025-06-28T10:29:06Z",
            deadline: "2025-07-07T10:29:06Z"
        },
        {
            id: 8,
            userId: 1,
            title: "aasljfh auhwo auhous dfpuaf piausgdf asdf",
            createdAt: "2025-06-28T10:29:06Z",
            deadline: "2025-07-07T10:29:06Z"
        },
        {
            id: 9,
            userId: 1,
            title: "aasljfh auhwo auhous dfpuaf piausgdf asdf",
            createdAt: "2025-06-28T10:29:06Z",
            deadline: "2025-07-07T10:29:06Z"
        },
        {
            id: 10,
            userId: 1,
            title: "aasljfh auhwo auhous dfpuaf piausgdf asdf",
            createdAt: "2025-06-28T10:29:06Z",
            deadline: "2025-07-07T10:29:06Z"
        },
        {
            id: 11,
            userId: 1,
            title: "aasljfh auhwo auhous dfpuaf piausgdf asdf",
            createdAt: "2025-06-28T10:29:06Z",
            deadline: "2025-07-07T10:29:06Z"
        },
        {
            id: 12,
            userId: 1,
            title: "aasljfh auhwo auhous dfpuaf piausgdf asdf",
            createdAt: "2025-06-28T10:29:06Z",
            deadline: "2025-07-07T10:29:06Z"
        }
    ]
    const startDate = new Date(query.start)
    const endDate = new Date(query.end)
    return dates.filter(el => {
        const date = new Date(el.deadline)
        return date > startDate && date < endDate
    } )
})