import { UiModal } from "../../uikit/ui-modal";
import { UiButton } from "../../uikit/ui-button";

export function GameOverModal() {
  <UiModal
    width="md"
    isOpen={winnerSymbol}
    onClose={() => {
      console.log("close");
    }}
  >
    <UiModal.Header>Игра завершена</UiModal.Header>

    <UiModal.Body>
      <div className="text-sm">
        Победитель: <span className="text-teal-600">Lisdan</span>
      </div>
    </UiModal.Body>

    <UiModal.Footer>
      <UiButton size="md" variant="outline">
        Вернуться
      </UiButton>
      <UiButton size="md" variant="primary">
        Играть снова
      </UiButton>
    </UiModal.Footer>
  </UiModal>;
}
