function superbowlWin(records) {
    const winRecord = records.find(record => record.result === "W");
  
    if (winRecord) {
      return winRecord.year;
    } else {
      return undefined;
    }
  }
  
  // Example usage
  const record = [
    { year: "2018", result: "N/A" },
    { year: "2017", result: "N/A" },
    { year: "2016", result: "N/A" },
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // ... other records
  ];
  
  // Test cases
  it('returns a year the Denver Broncos won the superbowl', function () {
    expect(superbowlWin(record)).to.equal('2015');
  });
  
  it('returns undefined if the record has no win objects', function() {
    const sadReality = [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ];
    expect(superbowlWin(sadReality)).to.equal(undefined);
  });
