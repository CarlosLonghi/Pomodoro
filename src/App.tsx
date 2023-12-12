import { Button } from './components/Button'

export function App() {
  return (
    <>
      <div className="font-display flex flex-row items-center justify-center gap-6 h-screen bg-gray-700">
        <div className="flex flex-col items-center justify-center gap-3">
          <Button size="xs">Primary xs</Button>
          <Button size="sm">Primary sm</Button>
          <Button>Primary Default</Button>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <Button secondary size="xs">
            Secondary xs
          </Button>
          <Button secondary size="sm">
            Secondary sm
          </Button>
          <Button secondary>Secondary Default</Button>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <Button success size="xs">
            Success
          </Button>
          <Button success size="sm">
            Success
          </Button>
          <Button success size="default">
            Success Default
          </Button>
          <Button success className="w-32">
            Success Custom
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <Button danger size="xs">
            Danger xs
          </Button>
          <Button danger size="sm">
            Danger sm
          </Button>
          <Button danger>Danger Default</Button>
        </div>
      </div>
    </>
  )
}
