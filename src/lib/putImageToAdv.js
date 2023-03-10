import {$fileUpload} from "../http/interceptors";

export const putImageToAdv = async (id, file, dispatch, setAdvImages) => {
	const formData = new FormData()
	formData.append('file', file)
	const response = await $fileUpload.post(`/ads/${id}/image`, formData)
	const imagesUrls = response.data.images.map(el => (el.url))
	while (imagesUrls.length < 5) imagesUrls.push('')
	while (imagesUrls.length > 5) imagesUrls.pop()
	dispatch(setAdvImages(imagesUrls))
}