import pandas as pd

df = pd.DataFrame(data={"col1": [1, 2], "col2": [3, 4]})

# // define a data move API

def combine_funcs(funcs):
  def combined_func(row):
    return row.map(funcs)
  return combined_func

def are_similar(df1, df2):
  return tuple(df1.columns.values) == tuple(df2.columns.values)

def save(df, to_file, file_type="csv", *args, **kwargs):
  if file_type == "csv":
    return df.to_csv(to_file, *args, **kwargs)
  elif file_type == "excel":
    return df.to_excel(to_file, *args, **kwargs)
  elif file_type == "json":
    return df.to_json(to_file, *args, **kwargs)
  else:
    raise ValueError(f"to_file must be one of csv, excel. Found {file_type} instead.")

def load(from_file, file_type="csv", *args, **kwargs):
  if file_type == "csv":
    return read_csv(from_file, *args, **kwargs)
  elif file_type == "excel":
    return read_excel(from_file, *args, **kwargs)
  elif file_type == "json":
    return read_json(from_file, *args, **kwargs)
  else:
    raise ValueError(f"to_file must be one of csv, excel. Found {file_type} instead.")


def name(df, **attribute_names):
  return df.rename(columns=attribute_names)


def select(df, condition=True, attrs=True):
  return df[condition][attrs]


def map_data(df, condition=True, attrs=True, **funcs):
  return df[condition][attrs].apply(combine_funcs(funcs), axis=1)


def calculate(df, attrs=True, **funcs):
  return df.apply[attrs](combine_funcs(funcs), axis=1)

def aggregate(df, attrs, **attr_func_pairs):
  return df.groupby(attrs).agg(**attr_func_pairs)


def combine(df1, df2, operator="add"):
  if operator == "add":
    return add(df1, df2)
  elif operator == "subtract":
    return subtract(df1, df2)
  elif operator == "intersect":
    return intersect(df1, df2)
  else:
    raise ValueError(f"Operator must be one of: add, subtract, intersect. Found {operator} instead.")

def add(df1, df2):
  if not are_similar(df1, df2):
    raise ValueError(f"Datasets must have the same attributes in the same order. Found ${df1.columns.values} and ${df2.columns.values}.")
  return df1.concat(d2)

def subtract(df1, df2):
  if not are_similar(df1, df2):
    raise ValueError(f"Datasets must have the same attributes in the same order. Found ${df1.columns.values} and ${df2.columns.values}.")
  return df1.merge(df2, indicator=True, how="left")[lambda x: x._merge=="left_only"].drop("_merge", 1)

def intersect(df1, df2):
  if not are_similar(df1, df2):
    raise ValueError(f"Datasets must have the same attributes in the same order. Found ${df1.columns.values} and ${df2.columns.values}.")
  return df1[(df1==df2).values.all(axis=1)]


def relate(df1, df2):
  return df1.merge(df2, how="cross")