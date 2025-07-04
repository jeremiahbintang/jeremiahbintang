declare interface TodoAPI {
    id: number,
    userId: number,
    title: string,
    createdAt: string,
    deadline: string,
}

declare interface TodoCalendar {
    [key: string]: Todo[]
}