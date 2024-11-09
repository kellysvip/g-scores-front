import React, { useEffect, useState } from "react";
import { FlexStartColumn, InputWrapper } from "../styled-components";
import { SearchInput } from "../search-input";
import { debounce } from "@mui/material/utils";
import { getRequest } from "../helpers/api-requests";
import { Student } from "../constants/types/student.type";
import { Card, CardContent, Typography } from "@mui/material";

type ErrorsType = Record<keyof "search", string>;

export const SEARCH_DELAY_MS = 500;

export default function SearchDetailsForm() {
  const [errors, setErrors] = useState<ErrorsType>({} as ErrorsType);
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [student, setStudent] = useState<Student>();

  const handleSearchTextChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value || undefined);
    },
    SEARCH_DELAY_MS
  );

  const setUpData = () => {
    getRequest(`/students/${search}`)
      .then((student) => {
        console.log(search, student);
        setStudent(student);
      })
      .catch(() => {
        setStudent(undefined);
      });
  };

  useEffect(() => {
    setUpData();
  }, [search]);

  return (
    <FlexStartColumn>
      <Card sx={{ minWidth: 500 }}>
        <CardContent>
          <form>
            <InputWrapper>
              <FlexStartColumn>
                <div style={{ fontSize: "30px", fontWeight: "bold" }}>
                  {" "}
                  User Registration{" "}
                </div>
                <div> Registration number: </div>

                <SearchInput handleChange={handleSearchTextChange} />
              </FlexStartColumn>
            </InputWrapper>
          </form>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 500, marginTop: "30px" }}>
        <CardContent>
          {!student ? (
            <Typography sx={{ fontWeight: "bold" }}>
              Không tìm thấy thí sinh
            </Typography>
          ) : (
            <>
              {student.math && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Math: {student.math}
                </Typography>
              )}
              {student.physics && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Physics: {student.physics}
                </Typography>
              )}
              {student.chemistry && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Chemistry: {student.chemistry}
                </Typography>
              )}
              {student.literature && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Literature: {student.literature}
                </Typography>
              )}
              {student.biology && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Biology: {student.biology}
                </Typography>
              )}
              {student.history && (
                <Typography sx={{ fontWeight: "bold" }}>
                  History: {student.history}
                </Typography>
              )}
              {student.geography && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Geography: {student.geography}
                </Typography>
              )}
              {student.civicEducation && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Civic Education: {student.civicEducation}
                </Typography>
              )}
              {student.foreignLanguage && (
                <Typography sx={{ fontWeight: "bold" }}>
                  Foreign Language: {student.foreignLanguage}
                </Typography>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </FlexStartColumn>
  );
}
