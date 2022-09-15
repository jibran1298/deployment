import { API_ENDPOINT } from '../../../shared/data/common-data'
import ActionsType from '../../utils/actions.type'

export const setLoginData = (data) => ({
    type: ActionsType.LOGIN,
    payload: data,
})

export const userLogin = ({ email = '', password = '' }) => {
    return async (dispatch) => {
        try {
            const formdata = new FormData()
            formdata.append('identifier', email?.current?.value)
            formdata.append('password', password?.current?.value)
            const data = await fetch(`${API_ENDPOINT}/auth/local`, {
                method: 'POST',
                body: formdata,
            })

            const response = await data.json()

            dispatch(setLoginData(response))

            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }
}
