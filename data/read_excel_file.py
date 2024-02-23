# %%
import pandas as pd
import json

# Read the Excel file into a DataFrame
data = pd.read_excel("./doi_tests.xlsx", header=None, usecols="A", names=["DOI File URL"])

# Convert DataFrame to character array
json_char_array = data["DOI File URL"].tolist()

# Write the list to a file in JSON format
with open('data.json', 'w') as f:
    json.dump(json_char_array, f)

# # Write the character array to a file
# with open('data.json', 'w') as f:
#     f.write(str(json_char_array))

# with open('output.json', 'w') as filehandle:
#     json.dump(json_char_array.toList(), filehandle)

# %%
