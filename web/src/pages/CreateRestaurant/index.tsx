import React, { useState, useCallback, ChangeEvent, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Map, Marker, TileLayer } from 'react-leaflet'
import Leaflet, { LeafletMouseEvent } from 'leaflet'
import { FiPlus } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import mapMarkerImg from '../../images/marker.png'

import Sidebar from '../../components/Sidebar'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'

import {
  Container,
  InputBlock,
  ImagesContainer,
  ButtonSelectContainer
} from './styles'

const CreateRestaurant: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [openOnWeekends, setOpenOnWeekends] = useState(0)
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const formRef = useRef<FormHandles>(null)
  const history = useHistory()

  const handleMapClick = useCallback((envet: LeafletMouseEvent) => {
    const { lat, lng } = envet.latlng

    setPosition({
      latitude: lat,
      longitude: lng
    })
  }, [])

  const handleSelectImage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return
      }

      const selectedImages = Array.from(event.target.files)

      const selectedImagesPreview = selectedImages.map(image => {
        return URL.createObjectURL(image)
      })

      setPreviewImages(selectedImagesPreview)

      return selectedImages
    },
    []
  )

  const handleSubmit = useCallback(
    data => {
      console.log(data)
      // history.push('/done')
    },
    [history]
  )

  return (
    <Container>
      <Sidebar />

      <main>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-23.4516163, -46.7279187]}
              zoom={15}
              style={{ width: '100%', height: '100%' }}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  position={[-23.4516163, -46.7279187]}
                  icon={Leaflet.icon({
                    iconUrl: mapMarkerImg,
                    iconSize: [48, 48],
                    iconAnchor: [34, 56]
                  })}
                />
              )}
            </Map>

            <Input name="name" label="Nome" />

            <Textarea name="about" label="Sobre" maxCharacter="300" />

            <Input name="whatsapp_phone" label="Número Whatsapp" />

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <ImagesContainer>
                {previewImages.map(image => {
                  return <img key={image} src={image} alt="" />
                })}

                <label htmlFor="image-array">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
                <input
                  id="image-array"
                  type="file"
                  multiple
                  onChange={handleSelectImage}
                />
              </ImagesContainer>
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <Textarea
              name="instructions"
              label="Instruções"
              maxCharacter="500"
            />

            <Input name="opening_hours" label="Horário de funcionamento" />

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <ButtonSelectContainer activeButton={openOnWeekends}>
                <button type="button" onClick={() => setOpenOnWeekends(1)}>
                  Sim
                </button>
                <button type="button" onClick={() => setOpenOnWeekends(2)}>
                  Não
                </button>
              </ButtonSelectContainer>
            </InputBlock>
          </fieldset>

          <button type="submit">Confirmar</button>
        </Form>
      </main>
    </Container>
  )
}

export default CreateRestaurant
