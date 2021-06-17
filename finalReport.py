import os
import numpy as np
import pandas as pd

def combine_reports(data_path):
    final_data = os.path.join(data_path, "report.xlsx")
    blockage_fr_data = os.path.join(data_path, "blockage_flow_rate.xlsx")
    pipe_data = os.path.join(data_path, "pipeData.csv")
    corrosion_crack_data = os.path.join(data_path, "rust_check_report.xlsx")

    # dfFinalReport = pd.DataFrame()
    dfCorrosionCrack = pd.DataFrame(pd.read_excel(corrosion_crack_data))
    dfBlockageFR = pd.read_excel(blockage_fr_data)
    dfPipeData = pd.read_csv(pipe_data)

    dfFinalReport = pd.concat([dfCorrosionCrack, dfBlockageFR, dfPipeData], axis=1)

    dfFinalReport.to_excel(final_data, index=False)


