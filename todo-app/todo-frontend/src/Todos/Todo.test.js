import { render, screen } from '@testing-library/react'
import Todo from './Todo'

describe('<Todo />', () => {
    test('component is rendered with appropriate text', () => {
        const todo = { text: 'Hello', done: false}
        render(<Todo todo={todo} />)
        const element = screen.getByText('Hello')
        expect(element).toBeDefined()
    })
})