import pandas as pd

json_file = 'RockPaperSizor.json' 

df = pd.read_json(json_file)
df.to_csv('./Estatistica.csv')