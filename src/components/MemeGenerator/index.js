import {Component} from 'react'
import {
  AppContainer,
  MainContainer,
  FormElement,
  MainHeading,
  LabelElement,
  InputElement,
  SelectElement,
  OptionElement,
  GeneratorButton,
  ImageContainer,
  Heading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    initialOptionValue: fontSizesOptionsList[0].optionId,
    inputUrl: '',
    inputTopText: '',
    inputBottomText: '',
    generateInputUrl: '',
    generateInputTopText: '',
    generateInputBottomText: '',
    fontSize: '',
  }

  onGenerate = event => {
    event.preventDefault()
    const {
      initialOptionValue,
      inputUrl,
      inputTopText,
      inputBottomText,
    } = this.state
    this.setState({
      generateInputUrl: inputUrl,
      generateInputTopText: inputTopText,
      generateInputBottomText: inputBottomText,
      fontSize: initialOptionValue,
    })
  }

  onChangeOfUrl = event => {
    this.setState({inputUrl: event.target.value})
  }

  onChangeOfTopInput = event => {
    this.setState({inputTopText: event.target.value})
  }

  onChangeOfBottomInput = event => {
    this.setState({inputBottomText: event.target.value})
  }

  onChangeOfSelect = event => {
    this.setState({initialOptionValue: event.target.value})
  }

  render() {
    const {
      initialOptionValue,
      inputUrl,
      inputTopText,
      inputBottomText,
      generateInputUrl,
      generateInputTopText,
      generateInputBottomText,
      fontSize,
    } = this.state

    return (
      <AppContainer>
        <MainHeading>Meme Generator</MainHeading>
        <MainContainer>
          <FormElement onSubmit={this.onGenerate}>
            <LabelElement htmlFor="url-id">Image URL</LabelElement>
            <InputElement
              placeholder="Enter the Image Url"
              type="text"
              id="url-id"
              onChange={this.onChangeOfUrl}
              value={inputUrl}
            />
            <LabelElement htmlFor="top-id">Top Text</LabelElement>
            <InputElement
              placeholder="Enter the Top Text"
              id="top-id"
              onChange={this.onChangeOfTopInput}
              value={inputTopText}
            />
            <LabelElement htmlFor="bottom-id">Bottom Text</LabelElement>
            <InputElement
              placeholder="Enter the Bottom Text"
              id="bottom-id"
              onChange={this.onChangeOfBottomInput}
              value={inputBottomText}
            />
            <LabelElement htmlFor="select-id">Font Size</LabelElement>
            <SelectElement
              id="select-id"
              value={initialOptionValue}
              onChange={this.onChangeOfSelect}
            >
              {fontSizesOptionsList.map(eachOption => (
                <OptionElement
                  key={eachOption.optionId}
                  value={eachOption.optionId}
                >
                  {eachOption.displayText}
                </OptionElement>
              ))}
            </SelectElement>
            <GeneratorButton type="submit">Generate</GeneratorButton>
          </FormElement>
          <ImageContainer
            generateInputUrl={generateInputUrl}
            data-testid="meme"
          >
            <Heading fontSize={fontSize}>{generateInputTopText}</Heading>
            <Heading fontSize={fontSize}>{generateInputBottomText}</Heading>
          </ImageContainer>
        </MainContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator