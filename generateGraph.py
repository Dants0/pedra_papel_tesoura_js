import pandas as pd
import matplotlib.pyplot as plt

# Carregue os dados do CSV em um DataFrame do Pandas
df = pd.read_csv('Estatistica.csv')

# Conte as ocorrências de vitórias para Bot 1 e Bot 2
bot1_wins = (df['winner'] == 'Alis venceu').sum()
bot2_wins = (df['winner'] == 'C3-P0 venceu').sum()

# Crie um gráfico de barras
bots = ['Alis', 'C3-P0']
wins = [bot1_wins, bot2_wins]

plt.bar(bots, wins, color=['blue', 'green'])
plt.xlabel('Bots')
plt.ylabel('Número de Vitórias')
plt.title('Vitórias de Bot 1 vs. Bot 2')
plt.show()
