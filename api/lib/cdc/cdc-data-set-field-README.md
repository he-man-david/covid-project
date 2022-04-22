

# The below tables follows the following format: 
================================================

## TABLE: Provisional deaths by age and sex 
## data set: 9bhg-hcku.json

### field_name                   data type               Description 
data_as_of                    floating_timestamp      Data As Of
start_date                    floating_timestamp      Start Date
end_date                      floating_timestamp      End Date
group                         text                    Group
state                         text                    State
sex                           text                    Sex
age_group                     text                    Age Group
covid_19_deaths               number                  COVID-19 Deaths
total_deaths                  number                  Total Deaths
pneumonia_deaths              number                  Pneumonia Deaths
pneumonia_and_covid_19_deaths number                  Pneumonia and COVID-19 Deaths
influenza_deaths              number                  Influenza Deaths
pneumonia_influenza_or_covid  number                  Pneumonia, Influenza, or COVID-19 deaths

# Age groups in data set 
========================

## ** Note: ** it's best to pass the full string when querying 
## by age group. When we use the <> operators, all age groups 
## are returned. 

'All Ages' 
'Under 1 year'
'0-17 years'
'1-4 years'
'5-14 years'
'15-24 years'
'18-29 years'
'25-34 years'
'30-39 years'
'35-44 years'
'40-49 years'
'45-54 years'
'50-64 years'
'55-64 years'
'65-74 years'
'75-84 years'
'85 years and over'

## **Note** State names must start with a capital letter: Washington...
## California... NOT washington, california, etc...

### documentation found [here] (https://dev.socrata.com/foundry/data.cdc.gov/9bhg-hcku)


# COVID-19 Vaccination Trends in the United States,National and Jurisdictional
## data set: rh2h-3yt2.json
#### field_name                   data type               Description 
date                          floating_timestamp        Date
mmwr_week                     number                    MMWR_week
location                      text                      Location
administered_daily            number                    Administered_Daily
administered_cumulative       number                    Administered_Cumulative
administered_7_day_rolling    number                    Administered_7_Day_Rolling_Average
admin_dose_1_daily            number                    Admin_Dose_1_Daily
admin_dose_1_cumulative       number                    Admin_Dose_1_Cumulative
admin_dose_1_day_rolling      number                    Admin_Dose_1_Day_Rolling_Average
date_type                     text                      date_type
administered_daily_change     number                    Administered_daily_change_report
administered_daily_change_1   number                    Administered_daily_change_report_7dayroll
series_complete_daily         number                    Series_Complete_Daily
series_complete_cumulative    number                    Series_Complete_Cumulative
series_complete_day_rolling   number                    Series_Complete_Day_Rolling_Average

# documentation found at: https://dev.socrata.com/foundry/data.cdc.gov/rh2h-3yt2