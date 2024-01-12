import pyautogui as mouse
import pyautogui as time
import pyautogui as acao


time.sleep(2)
mouse.click(x=668, y=751)
time.sleep(2);
mouse.click(x=365, y=62)
time.sleep(2)
acao.hotkey('ctrl','a')
time.sleep(2)
acao.press('backspace')
mouse.click(x=365, y=62)
time.sleep(2)
acao.typewrite('https://cursos.alura.com.br/',interval=0.1)

time.sleep(2)
acao.press('enter')
time.sleep(2)
acao.click(x=356, y=344)
time.sleep(2)
acao.moveTo(x=323, y=712)
time.sleep(2)
acao.click(x=315, y=704)
acao.moveTo(x=315, y=704)