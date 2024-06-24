document.addEventListener('DOMContentLoaded', function () {
    // Hardcoded dataset
    const dataset = [
   { date: "1996-01", D7DW: 45.4, D7DU: 43.3, D7DT: 62.5, D7DV: 33.2 },
        { date: "1996-02", D7DW: 45.4, D7DU: 43.3, D7DT: 62.5, D7DV: 32.9 },
		{ date: "1996-03", D7DW: 45.4, D7DU: 43.3, D7DT: 62.5, D7DV: 33.9 },
		{ date: "1996-04", D7DW: 45.4, D7DU: 43.3, D7DT: 62.5, D7DV: 34.9 },
	    { date: "1996-05", D7DW: 44.0, D7DU: 43.3, D7DT: 62.6, D7DV: 32.8 },
		{ date: "1996-06", D7DW: 43.8, D7DU: 43.3, D7DT: 62.9, D7DV: 32.1 },
		{ date: "1996-07", D7DW: 43.9, D7DU: 43.3, D7DT: 63.0, D7DV: 32.6 },
		{ date: "1996-08", D7DW: 43.9, D7DU: 43.3, D7DT: 62.7, D7DV: 32.9 },
		{ date: "1996-09", D7DW: 44.8, D7DU: 43.3, D7DT: 62.4, D7DV: 37.4},
		{ date: "1996-10", D7DW: 45.7, D7DU: 43.3, D7DT: 61.7, D7DV: 40.7 },
		{ date: "1996-11", D7DW: 46.1, D7DU: 43.3, D7DT: 61.3, D7DV: 36.5 },
		{ date: "1996-12", D7DW: 46.1, D7DU: 43.3, D7DT: 61.1, D7DV: 38.3 },
		{ date: "1997-01", D7DW: 46.2, D7DU: 43.3, D7DT: 60.4, D7DV: 38.5 },
		{ date: "1997-02", D7DW: 46.2, D7DU: 43.3, D7DT: 60.7, D7DV: 36.1 },
		{ date: "1997-03", D7DW: 46.1, D7DU: 43.3, D7DT: 60.9, D7DV: 33.0 },
		{ date: "1997-04", D7DW: 46.2, D7DU: 43.1, D7DT: 60.8, D7DV: 31.3 },
		{ date: "1997-05", D7DW: 44.7, D7DU: 43.1, D7DT: 60.4, D7DV: 31.4 },
		{ date: "1997-06", D7DW: 44.5, D7DU: 43.1, D7DT: 60.1, D7DV: 30.6 },
		{ date: "1997-07", D7DW: 44.6, D7DU: 43.1, D7DT: 59.7, D7DV: 29.3 },
		{ date: "1997-08", D7DW: 44.4, D7DU: 43.1, D7DT: 59.5, D7DV: 30.5 },
		{ date: "1997-09", D7DW: 44.3, D7DU: 42.1, D7DT: 57.7, D7DV: 29.8 },
		{ date: "1997-10", D7DW: 45.9, D7DU: 42.1, D7DT: 57.6, D7DV: 31.3 },
		{ date: "1997-11", D7DW: 45.9, D7DU: 42.1, D7DT: 57.1, D7DV: 31.2 },
		{ date: "1997-12", D7DW: 45.9, D7DU: 42.1, D7DT: 56.7, D7DV: 30.3 },
		{ date: "1998-01", D7DW: 45.9, D7DU: 41.6, D7DT: 56.6, D7DV: 28.1 },
		{ date: "1998-02", D7DW: 45.9, D7DU: 41.6, D7DT: 57.1, D7DV: 26.6 },
		{ date: "1998-03", D7DW: 45.9, D7DU: 41.4, D7DT: 57.6, D7DV: 25.0 },
		{ date: "1998-04", D7DW: 45.9, D7DU: 41.6, D7DT: 57.6, D7DV: 25.2 },
		{ date: "1998-05", D7DW: 44.8, D7DU: 41.4, D7DT: 57.0, D7DV: 25.3 },
		{ date: "1998-06", D7DW: 44.9, D7DU: 41.3, D7DT: 56.5, D7DV: 24.5 },
		{ date: "1998-07", D7DW: 45.1, D7DU: 41.1, D7DT: 56.1, D7DV: 23.7 },
		{ date: "1998-08", D7DW: 45.1, D7DU: 41.6, D7DT: 56.1, D7DV: 23.2 },
		{ date: "1998-09", D7DW: 45.4, D7DU: 41.4, D7DT: 56.1, D7DV: 24.0 },
		{ date: "1998-10", D7DW: 46.9, D7DU: 41.4, D7DT: 56.1, D7DV: 24.9 },
		{ date: "1998-11", D7DW: 47.0, D7DU: 41.4, D7DT: 56.1, D7DV: 24.0 },
		{ date: "1998-12", D7DW: 47.0, D7DU: 41.4, D7DT: 56.1, D7DV: 22.3 },
		{ date: "1999-01", D7DW: 47.0, D7DU: 41.6, D7DT: 56.1, D7DV: 22.5 },
		{ date: "1999-02", D7DW: 47.0, D7DU: 41.6, D7DT: 56.1, D7DV: 22.2 },
		{ date: "1999-03", D7DW: 47.0, D7DU: 41.7, D7DT: 56.1, D7DV: 23.3 },
		{ date: "1999-04", D7DW: 47.1, D7DU: 41.3, D7DT: 56.1, D7DV: 25.8 },
		{ date: "1999-05", D7DW: 46.0, D7DU: 41.3, D7DT: 56.0, D7DV: 25.5 },
		{ date: "1999-06", D7DW: 45.9, D7DU: 41.3, D7DT: 56.0, D7DV: 25.5 },
		{ date: "1999-07", D7DW: 45.9, D7DU: 41.3, D7DT: 55.8, D7DV: 28.8 },
		{ date: "1999-08", D7DW: 45.9, D7DU: 41.3, D7DT: 55.8, D7DV: 29.4 },
		{ date: "1999-09", D7DW: 46.3, D7DU: 41.3, D7DT: 55.8, D7DV: 31.4 },
		{ date: "1999-10", D7DW: 47.4, D7DU: 41.3, D7DT: 55.8, D7DV: 31.4 },
		{ date: "1999-11", D7DW: 47.6, D7DU: 41.3, D7DT: 55.8, D7DV: 33.2 },
		{ date: "1999-12", D7DW: 47.7, D7DU: 41.3, D7DT: 55.8, D7DV: 38.1 },
		{ date: "2000-01", D7DW: 47.8, D7DU: 41.3, D7DT: 55.8, D7DV: 37.3 },
		{ date: "2000-02", D7DW: 47.7, D7DU: 41.3, D7DT: 55.8, D7DV: 37.5 },
		{ date: "2000-03", D7DW: 47.8, D7DU: 41.3, D7DT: 55.7, D7DV: 38.8 },
		{ date: "2000-04", D7DW: 47.7, D7DU: 40.2, D7DT: 55.6, D7DV: 37.7 },
		{ date: "2000-05", D7DW: 46.5, D7DU: 40.2, D7DT: 55.1, D7DV: 36.8 },
		{ date: "2000-06", D7DW: 46.2, D7DU: 40.2, D7DT: 54.5, D7DV: 37.9 },
		{ date: "2000-07", D7DW: 46.1, D7DU: 40.2, D7DT: 54.2, D7DV: 40.9 },
		{ date: "2000-08", D7DW: 46.2, D7DU: 40.2, D7DT: 54.2, D7DV: 41.2 },
		{ date: "2000-09", D7DW: 47.1, D7DU: 40.2, D7DT: 54.2, D7DV: 52.2 },
		{ date: "2000-10", D7DW: 48.6, D7DU: 40.4, D7DT: 54.2, D7DV: 55.2 },
		{ date: "2000-11", D7DW: 49.0, D7DU: 40.4, D7DT: 54.2, D7DV: 51.4 },
		{ date: "2000-12", D7DW: 49.1, D7DU: 40.4, D7DT: 54.2, D7DV: 48.8 },
		{ date: "2001-01", D7DW: 49.3, D7DU: 40.4, D7DT: 54.2, D7DV: 42.4 },
		{ date: "2001-02", D7DW: 49.1, D7DU: 40.5, D7DT: 54.2, D7DV: 43.0 },
		{ date: "2001-03", D7DW: 49.1, D7DU: 40.5, D7DT: 54.2, D7DV: 41.6 },
		{ date: "2001-04", D7DW: 49.1, D7DU: 42.1, D7DT: 54.2, D7DV: 40.3 },
		{ date: "2001-05", D7DW: 48.6, D7DU: 42.2, D7DT: 54.2, D7DV: 42.4 },
		{ date: "2001-06", D7DW: 48.4, D7DU: 42.2, D7DT: 54.3, D7DV: 42.2 },
		{ date: "2001-07", D7DW: 48.1, D7DU: 42.2, D7DT: 54.3, D7DV: 40.4 },
		{ date: "2001-08", D7DW: 48.2, D7DU: 42.2, D7DT: 54.3, D7DV: 39.2 },
		{ date: "2001-09", D7DW: 50.6, D7DU: 42.2, D7DT: 54.4, D7DV: 46.6 },
		{ date: "2001-10", D7DW: 51.9, D7DU: 42.2, D7DT: 54.4, D7DV: 38.5 },
		{ date: "2001-11", D7DW: 52.2, D7DU: 42.2, D7DT: 54.4, D7DV: 34.9 },
		{ date: "2001-12", D7DW: 52.3, D7DU: 42.2, D7DT: 54.4, D7DV: 32.8 },
		{ date: "2002-01", D7DW: 52.3, D7DU: 44.1, D7DT: 54.4, D7DV: 34.3 },
		{ date: "2002-02", D7DW: 52.3, D7DU: 44.1, D7DT: 54.4, D7DV: 33.2 },
		{ date: "2002-03", D7DW: 52.4, D7DU: 44.2, D7DT: 54.4, D7DV: 35.2 },
		{ date: "2002-04", D7DW: 52.4, D7DU: 44.3, D7DT: 54.4, D7DV: 36.5 },
		{ date: "2002-05", D7DW: 51.6, D7DU: 44.3, D7DT: 54.5, D7DV: 36.7 },
		{ date: "2002-06", D7DW: 51.4, D7DU: 44.5, D7DT: 54.5, D7DV: 37.5 },
		{ date: "2002-07", D7DW: 51.4, D7DU: 44.5, D7DT: 54.5, D7DV: 35.2 },
		{ date: "2002-08", D7DW: 51.3, D7DU: 44.5, D7DT: 54.5, D7DV: 34.8 },
		{ date: "2002-09", D7DW: 52.2, D7DU: 44.5, D7DT: 54.5, D7DV: 39.3 },
		{ date: "2002-10", D7DW: 53.2, D7DU: 44.5, D7DT: 54.5, D7DV: 39.7 },
		{ date: "2002-11", D7DW: 53.7, D7DU: 44.5, D7DT: 54.5, D7DV: 36.1 },
		{ date: "2002-12", D7DW: 53.6, D7DU: 44.6, D7DT: 54.5, D7DV: 40.0 },
		{ date: "2003-01", D7DW: 53.5, D7DU: 44.6, D7DT: 54.7, D7DV: 41.9 },
		{ date: "2003-02", D7DW: 53.5, D7DU: 44.6, D7DT: 54.7, D7DV: 49.2 },
		{ date: "2003-03", D7DW: 53.6, D7DU: 44.6, D7DT: 54.7, D7DV: 50.7 },
		{ date: "2003-04", D7DW: 53.2, D7DU: 44.7, D7DT: 54.7, D7DV: 37.9 },
		{ date: "2003-05", D7DW: 52.7, D7DU: 45.0, D7DT: 54.8, D7DV: 35.7 },
		{ date: "2003-06", D7DW: 52.6, D7DU: 45.3, D7DT: 54.9, D7DV: 35.0 },
		{ date: "2003-07", D7DW: 52.6, D7DU: 45.4, D7DT: 55.1, D7DV: 36.2 },
		{ date: "2003-08", D7DW: 52.6, D7DU: 45.5, D7DT: 55.3, D7DV: 37.7 },
		{ date: "2003-09", D7DW: 53.3, D7DU: 45.5, D7DT: 55.4, D7DV: 37.2 },
		{ date: "2003-10", D7DW: 54.4, D7DU: 45.6, D7DT: 55.4, D7DV: 40.4 },
		{ date: "2003-11", D7DW: 54.5, D7DU: 45.8, D7DT: 55.6, D7DV: 40.2 },
		{ date: "2003-12", D7DW: 54.5, D7DU: 45.9, D7DT: 55.7, D7DV: 42.1 },
		{ date: "2004-01", D7DW: 54.7, D7DU: 46.2, D7DT: 56.0, D7DV: 41.3 },
		{ date: "2004-02", D7DW: 54.9, D7DU: 46.7, D7DT: 56.3, D7DV: 40.2 },
		{ date: "2004-03", D7DW: 54.8, D7DU: 47.4, D7DT: 57.0, D7DV: 40.7 },
		{ date: "2004-04", D7DW: 54.8, D7DU: 47.8, D7DT: 57.6, D7DV: 44.2 },
		{ date: "2004-05", D7DW: 54.4, D7DU: 47.9, D7DT: 57.9, D7DV: 47.7 },
		{ date: "2004-06", D7DW: 54.3, D7DU: 48.0, D7DT: 58.3, D7DV: 44.9 },
		{ date: "2004-07", D7DW: 54.6, D7DU: 48.2, D7DT: 58.4, D7DV: 45.3 },
		{ date: "2004-08", D7DW: 55.5, D7DU: 48.3, D7DT: 58.5, D7DV: 49.7 },
		{ date: "2004-09", D7DW: 56.9, D7DU: 48.4, D7DT: 58.8, D7DV: 52.2 },
		{ date: "2004-10", D7DW: 59.1, D7DU: 49.1, D7DT: 59.4, D7DV: 59.2 },
		{ date: "2004-11", D7DW: 59.8, D7DU: 50.7, D7DT: 60.4, D7DV: 55.0 },
		{ date: "2004-12", D7DW: 60.4, D7DU: 52.4, D7DT: 61.6, D7DV: 51.0 },
		{ date: "2005-01", D7DW: 60.6, D7DU: 53.3, D7DT: 62.5, D7DV: 51.8 },
		{ date: "2005-02", D7DW: 61.1, D7DU: 53.6, D7DT: 63.0, D7DV: 51.8 },
		{ date: "2005-03", D7DW: 61.2, D7DU: 53.7, D7DT: 63.4, D7DV: 59.2 },
		{ date: "2005-04", D7DW: 61.2, D7DU: 54.0, D7DT: 63.6, D7DV: 61.3 },
		{ date: "2005-05", D7DW: 60.6, D7DU: 54.1, D7DT: 63.8, D7DV: 57.9 },
		{ date: "2005-06", D7DW: 60.4, D7DU: 54.4, D7DT: 63.9, D7DV: 63.7 },
		{ date: "2005-07", D7DW: 60.3, D7DU: 54.4, D7DT: 63.9, D7DV: 68.1 },
		{ date: "2005-08", D7DW: 61.1, D7DU: 54.5, D7DT: 64.0, D7DV: 72.3 },
		{ date: "2005-09", D7DW: 61.7, D7DU: 55.1, D7DT: 64.8, D7DV: 73.3 },
		{ date: "2005-10", D7DW: 64.4, D7DU: 57.3, D7DT: 66.2, D7DV: 76.8 },
		{ date: "2005-11", D7DW: 65.0, D7DU: 59.4, D7DT: 67.6, D7DV: 68.4 },
		{ date: "2005-12", D7DW: 65.2, D7DU: 60.6, D7DT: 68.2, D7DV: 71.0 },
		{ date: "2006-01", D7DW: 65.3, D7DU: 61.1, D7DT: 68.9, D7DV: 72.3 },
		{ date: "2006-02", D7DW: 65.3, D7DU: 61.3, D7DT: 69.7, D7DV: 73.7 },
		{ date: "2006-03", D7DW: 65.4, D7DU: 63.3, D7DT: 71.6, D7DV: 74.5 },
		{ date: "2006-04", D7DW: 65.5, D7DU: 67.3, D7DT: 74.6, D7DV: 76.6 },
		{ date: "2006-05", D7DW: 66.2, D7DU: 71.4, D7DT: 77.7, D7DV: 77.1 },
		{ date: "2006-06", D7DW: 64.9, D7DU: 73.4, D7DT: 79.6, D7DV: 77.0 },
		{ date: "2006-07", D7DW: 64.8, D7DU: 74.1, D7DT: 80.4, D7DV: 79.5 },
		{ date: "2006-08", D7DW: 65.4, D7DU: 74.9, D7DT: 81.0, D7DV: 77.8 },
		{ date: "2006-09", D7DW: 66.2, D7DU: 76.8, D7DT: 82.1, D7DV: 73.7 },
		{ date: "2006-10", D7DW: 69.6, D7DU: 80.5, D7DT: 84.3, D7DV: 67.6 },
		{ date: "2006-11", D7DW: 70.4, D7DU: 83.0, D7DT: 85.9, D7DV: 64.5 },
		{ date: "2006-12", D7DW: 70.4, D7DU: 84.6, D7DT: 86.9, D7DV: 67.6 },
		{ date: "2007-01", D7DW: 70.5, D7DU: 84.8, D7DT: 87.3, D7DV: 62.9 },
		{ date: "2007-02", D7DW: 70.7, D7DU: 85.1, D7DT: 87.6, D7DV: 64.3 },
		{ date: "2007-03", D7DW: 70.7, D7DU: 84.4, D7DT: 87.6, D7DV: 66.6 },
		{ date: "2007-04", D7DW: 70.7, D7DU: 82.1, D7DT: 86.8, D7DV: 69.3 },
		{ date: "2007-05", D7DW: 70.4, D7DU: 79.4, D7DT: 85.8, D7DV: 69.0 },
		{ date: "2007-06", D7DW: 70.0, D7DU: 77.2, D7DT: 84.6, D7DV: 70.7 },
		{ date: "2007-07", D7DW: 69.9, D7DU: 75.5, D7DT: 83.6, D7DV: 72.6 },
		{ date: "2007-08", D7DW: 70.0, D7DU: 74.4, D7DT: 83.1, D7DV: 71.1 },
		{ date: "2007-09", D7DW: 70.8, D7DU: 73.9, D7DT: 83.1, D7DV: 75.5 },
		{ date: "2007-10", D7DW: 72.9, D7DU: 73.6, D7DT: 83.0, D7DV: 78.3 },
		{ date: "2007-11", D7DW: 74.2, D7DU: 73.6, D7DT: 83.0, D7DV: 88.8 },
		{ date: "2007-12", D7DW: 75.7, D7DU: 73.7, D7DT: 83.0, D7DV: 89.3 },
		{ date: "2008-01", D7DW: 76.6, D7DU: 74.1, D7DT: 83.4, D7DV: 92.7 },
		{ date: "2008-02", D7DW: 77.0, D7DU: 83.4, D7DT: 92.2, D7DV: 92.9 },
		{ date: "2008-03", D7DW: 77.3, D7DU: 83.4, D7DT: 92.2, D7DV: 106.1 },
		{ date: "2008-04", D7DW: 77.5, D7DU: 85.1, D7DT: 94.1, D7DV: 117.3 },
		{ date: "2008-05", D7DW: 79.1, D7DU: 85.1, D7DT: 94.1, D7DV: 127.2 },
		{ date: "2008-06", D7DW: 80.7, D7DU: 85.1, D7DT: 94.1, D7DV: 132.9 },
		{ date: "2008-07", D7DW: 81.5, D7DU: 85.2, D7DT: 94.1, D7DV: 139.6 },
		{ date: "2008-08", D7DW: 82.4, D7DU: 95.1, D7DT: 98.1, D7DV: 118.3 },
		{ date: "2008-09", D7DW: 89.8, D7DU: 110.8, D7DT: 108.2, D7DV:115.3},
		{ date: "2008-10", D7DW: 98.2, D7DU: 111.1, D7DT: 109.0, D7DV:  98.5 },
		{ date: "2008-11", D7DW: 99.0, D7DU: 110.9, D7DT: 109.0, D7DV:  90.5 },
		{ date: "2008-12", D7DW: 99.9, D7DU: 110.9, D7DT: 109.0, D7DV:  80.5 },
		{ date: "2009-01", D7DW: 101.0, D7DU: 110.9, D7DT: 108.7, D7DV: 79.3 },
		{ date: "2009-02", D7DW: 101.1, D7DU: 110.9, D7DT: 108.7, D7DV: 74.9 },
		{ date: "2009-03", D7DW: 101.0, D7DU: 106.2, D7DT: 108.2, D7DV: 67.5 },
		{ date: "2009-04", D7DW: 101.0, D7DU: 105.1, D7DT: 102.7, D7DV: 71.5 },
		{ date: "2009-05", D7DW: 99.3, D7DU: 105.1, D7DT: 100.5, D7DV: 71.6 },
		{ date: "2009-06", D7DW: 98.5, D7DU: 105.1, D7DT: 100.5, D7DV: 79.2 },
		{ date: "2009-07", D7DW: 97.7, D7DU: 104.6, D7DT: 100.5, D7DV: 70.9 },
		{ date: "2009-08", D7DW: 98.3, D7DU: 104.6, D7DT: 100.5, D7DV: 79.0 },
		{ date: "2009-09", D7DW: 98.5, D7DU: 104.6, D7DT: 100.5, D7DV: 77.1 },
		{ date: "2009-10", D7DW: 100.6, D7DU: 104.1, D7DT: 100.1, D7DV: 82.0 },
		{ date: "2009-11", D7DW: 101.4, D7DU: 104.5, D7DT: 100.1, D7DV: 84.3 },
		{ date: "2009-12", D7DW: 101.5, D7DU: 104.5, D7DT: 100.1, D7DV: 86.2 },
		{ date: "2010-01", D7DW: 101.4, D7DU: 104.6, D7DT: 100.1, D7DV: 103.6 },
		{ date: "2010-02", D7DW: 101.5, D7DU: 101.6, D7DT: 100.1, D7DV: 90.6 },
		{ date: "2010-03", D7DW: 101.5, D7DU: 101.6, D7DT: 100.1, D7DV: 97.0 },
		{ date: "2010-04", D7DW: 101.5, D7DU: 98.7, D7DT: 99.9, D7DV: 100.1 },
		{ date: "2010-05", D7DW: 99.1, D7DU: 98.7, D7DT: 99.9, D7DV: 100.1 },
		{ date: "2010-06", D7DW: 97.8, D7DU: 98.7, D7DT: 99.9, D7DV: 96.8 },
		{ date: "2010-07", D7DW: 96.9, D7DU: 98.7, D7DT: 99.9, D7DV: 95.0 },
		{ date: "2010-08", D7DW: 97.6, D7DU: 98.7, D7DT: 99.9, D7DV: 94.8 },
		{ date: "2010-09", D7DW: 98.1, D7DU: 98.7, D7DT: 99.9, D7DV: 94.5 },
		{ date: "2010-10", D7DW: 101.1, D7DU: 98.7, D7DT: 99.6, D7DV: 98.2 },
		{ date: "2010-11", D7DW: 101.6, D7DU: 98.7, D7DT: 99.6, D7DV: 101.6 },
		{ date: "2010-12", D7DW: 102.2, D7DU: 103.2, D7DT: 100.9, D7DV: 128.1 },
		{ date: "2011-01", D7DW: 103.1, D7DU: 104.1, D7DT: 101.7, D7DV: 125.5 },
		{ date: "2011-02", D7DW: 104.0, D7DU: 104.5, D7DT: 103.2, D7DV: 119.8 },
		{ date: "2011-03", D7DW: 103.7, D7DU: 105.0, D7DT: 104.0, D7DV: 130.4 },
		{ date: "2011-04", D7DW: 104.1, D7DU: 105.0, D7DT: 104.0, D7DV: 135.7 },
		{ date: "2011-05", D7DW: 102.7, D7DU: 105.0, D7DT: 104.0, D7DV: 125.4 },
		{ date: "2011-06", D7DW: 102.5, D7DU: 105.0, D7DT: 104.0, D7DV: 128.7 },
		{ date: "2011-07", D7DW: 102.7, D7DU: 105.0, D7DT: 104.0, D7DV: 124.8 },
		{ date: "2011-08", D7DW: 102.8, D7DU: 106.9, D7DT: 105.0, D7DV: 120.1 },
		{ date: "2011-09", D7DW: 103.4, D7DU: 120.7, D7DT: 112.8, D7DV: 123.8 },
		{ date: "2011-10", D7DW: 109.1, D7DU: 122.4, D7DT: 114.5, D7DV: 123.2 },
		{ date: "2011-11", D7DW: 109.9, D7DU: 123.6, D7DT: 115.1, D7DV: 130.9 },
		{ date: "2011-12", D7DW: 110.1, D7DU: 123.6, D7DT: 115.1, D7DV: 131.4 },
		{ date: "2012-01", D7DW: 110.2, D7DU: 123.6, D7DT: 115.1, D7DV: 131.6 },
		{ date: "2012-02", D7DW: 109.5, D7DU: 122.4, D7DT: 113.7, D7DV: 134.1 },
		{ date: "2012-03", D7DW: 110.0, D7DU: 121.9, D7DT: 112.4, D7DV: 136.4 },
		{ date: "2012-04", D7DW: 110.0, D7DU: 121.2, D7DT: 112.4, D7DV: 134.8 },
		{ date: "2012-05", D7DW: 107.7, D7DU: 121.2, D7DT: 112.3, D7DV: 127.3 },
		{ date: "2012-06", D7DW: 106.8, D7DU: 122.2, D7DT: 112.3, D7DV: 117.4 },
		{ date: "2012-07", D7DW: 107.2, D7DU: 121.2, D7DT: 112.3, D7DV: 120.4 },
		{ date: "2012-08", D7DW: 107.0, D7DU: 121.2, D7DT: 112.3, D7DV: 128.9 },
		{ date: "2012-09", D7DW: 107.5, D7DU: 121.2, D7DT: 112.3, D7DV: 132.4 },
		{ date: "2012-10", D7DW: 108.4, D7DU: 121.2, D7DT: 111.8, D7DV: 133.9 },
		{ date: "2012-11", D7DW: 108.9, D7DU: 123.5, D7DT: 113.8, D7DV: 130.7 },
		{ date: "2012-12", D7DW: 109.4, D7DU: 130.1, D7DT: 119.6, D7DV: 137.5 },
		{ date: "2013-01", D7DW: 109.5, D7DU: 129.9, D7DT: 119.6, D7DV: 134.7 },
		{ date: "2013-02", D7DW: 109.8, D7DU: 131.3, D7DT: 121.0, D7DV: 143.2 },
		{ date: "2013-03", D7DW: 109.2, D7DU: 131.3, D7DT: 121.0, D7DV: 141.5 },
		{ date: "2013-04", D7DW: 109.2, D7DU: 131.3, D7DT: 121.0, D7DV: 133.9 },
		{ date: "2013-05", D7DW: 109.4, D7DU: 131.3, D7DT: 121.0, D7DV: 125.0 },
		{ date: "2013-06", D7DW: 109.3, D7DU: 131.3, D7DT: 121.0, D7DV: 124.7 },
		{ date: "2013-07", D7DW: 109.6, D7DU: 131.3, D7DT: 121.4, D7DV: 128.0 },
		{ date: "2013-08", D7DW: 109.5, D7DU: 131.3, D7DT: 121.4, D7DV: 128.0 },
		{ date: "2013-09", D7DW: 110.1, D7DU: 131.3, D7DT: 121.4, D7DV: 131.1 },
		{ date: "2013-10", D7DW: 111.4, D7DU: 131.3, D7DT: 121.4, D7DV: 127.1 },
		{ date: "2013-11", D7DW: 112.4, D7DU: 131.3, D7DT: 121.4, D7DV: 124.7 },
		{ date: "2013-12", D7DW: 112.6, D7DU: 140.1, D7DT: 129.3, D7DV: 128.4 },
		{ date: "2014-01", D7DW: 113.3, D7DU: 138.8, D7DT: 129.1, D7DV: 121.7 },
		{ date: "2014-02", D7DW: 113.3, D7DU: 139.1, D7DT: 129.3, D7DV: 125.3 },
		{ date: "2014-03", D7DW: 113.2, D7DU: 138.7, D7DT: 129.1, D7DV: 121.7 },
		{ date: "2014-04", D7DW: 113.4, D7DU: 138.0, D7DT: 128.3, D7DV: 119.6 },
		{ date: "2014-05", D7DW: 112.5, D7DU: 138.0, D7DT: 128.3, D7DV: 118.3 },
		{ date: "2014-06", D7DW: 112.3, D7DU: 138.0, D7DT: 128.3, D7DV: 117.5 },
		{ date: "2014-07", D7DW: 112.1, D7DU: 138.0, D7DT: 128.3, D7DV: 116.4 },
		{ date: "2014-08", D7DW: 111.9, D7DU: 138.0, D7DT: 128.3, D7DV: 116.7 },
		{ date: "2014-09", D7DW: 112.5, D7DU: 138.0, D7DT: 128.3, D7DV: 115.0 },
		{ date: "2014-10", D7DW: 114.6, D7DU: 138.0, D7DT: 128.3, D7DV: 109.5 },
		{ date: "2014-11", D7DW: 114.8, D7DU: 138.0, D7DT: 128.3, D7DV: 108.1 },
		{ date: "2014-12", D7DW: 114.8, D7DU: 138.0, D7DT: 128.3, D7DV: 99.3 },
		{ date: "2015-01", D7DW: 114.6, D7DU: 137.3, D7DT: 128.3, D7DV: 86.7 },
		{ date: "2015-02", D7DW: 114.6, D7DU: 136.4, D7DT: 128.3, D7DV: 91.0 },
		{ date: "2015-03", D7DW: 114.8, D7DU: 132.8, D7DT: 128.3, D7DV: 88.3 },
		{ date: "2015-04", D7DW: 114.9, D7DU: 132.7, D7DT: 128.0, D7DV: 88.5 },
		{ date: "2015-05", D7DW: 112.5, D7DU: 131.9, D7DT: 128.0, D7DV: 89.8 },
		{ date: "2015-06", D7DW: 112.1, D7DU: 131.9, D7DT: 127.9, D7DV: 87.4 },
		{ date: "2015-07", D7DW: 112.0, D7DU: 131.9, D7DT: 127.9, D7DV: 83.7 },
		{ date: "2015-08", D7DW: 112.0, D7DU: 131.9, D7DT: 127.9, D7DV: 74.4 },
		{ date: "2015-09", D7DW: 112.4, D7DU: 129.0, D7DT: 127.9, D7DV: 75.6 },
		{ date: "2015-10", D7DW: 113.8, D7DU: 129.0, D7DT: 127.9, D7DV: 75.6 },
		{ date: "2015-11", D7DW: 114.1, D7DU: 129.0, D7DT: 127.9, D7DV: 73.0 },
		{ date: "2015-12", D7DW: 114.1, D7DU: 129.0, D7DT: 127.9, D7DV: 67.3 },
		{ date: "2016-01", D7DW: 114.1, D7DU: 129.0, D7DT: 127.9, D7DV: 61.2 },
		{ date: "2016-02", D7DW: 114.2, D7DU: 128.1, D7DT: 127.9, D7DV: 58.6 },
		{ date: "2016-03", D7DW: 114.0, D7DU: 124.8, D7DT: 127.9, D7DV: 63.2 },
		{ date: "2016-04", D7DW: 114.2, D7DU: 123.1, D7DT: 127.7, D7DV: 64.7 },
		{ date: "2016-05", D7DW: 112.8, D7DU: 123.1, D7DT: 127.7, D7DV: 68.7 },
		{ date: "2016-06", D7DW: 111.9, D7DU: 123.1, D7DT: 127.7, D7DV: 74.2 },
		{ date: "2016-07", D7DW: 110.0, D7DU: 123.1, D7DT: 127.7, D7DV: 74.4 },
		{ date: "2016-08", D7DW: 111.1, D7DU: 123.1, D7DT: 127.7, D7DV: 72.9 },
		{ date: "2016-09", D7DW: 112.0, D7DU: 123.1, D7DT: 127.7, D7DV: 76.2 },
		{ date: "2016-10", D7DW: 114.0, D7DU: 123.1, D7DT: 127.7, D7DV: 86.9 },
		{ date: "2016-11", D7DW: 114.8, D7DU: 123.1, D7DT: 127.7, D7DV: 83.4 },
		{ date: "2016-12", D7DW: 115.4, D7DU: 123.1, D7DT: 127.7, D7DV: 90.6 },
		{ date: "2017-01", D7DW: 115.7, D7DU: 122.6, D7DT: 127.7, D7DV: 96.0 },
		{ date: "2017-02", D7DW: 116.2, D7DU: 122.6, D7DT: 127.7, D7DV: 94.5 },
		{ date: "2017-03", D7DW: 116.2, D7DU: 122.6, D7DT: 128.9, D7DV: 89.8 },
		{ date: "2017-04", D7DW: 116.3, D7DU: 121.9, D7DT: 132.1, D7DV: 89.9 },
		{ date: "2017-05", D7DW: 114.8, D7DU: 122.4, D7DT: 137.5, D7DV: 83.7 },
		{ date: "2017-06", D7DW: 114.5, D7DU: 122.4, D7DT: 137.5, D7DV: 82.2 },
		{ date: "2017-07", D7DW: 114.4, D7DU: 123.1, D7DT: 139.2, D7DV: 81.5 },
		{ date: "2017-08", D7DW: 114.4, D7DU: 123.1, D7DT: 139.2, D7DV: 85.3 },
		{ date: "2017-09", D7DW: 114.4, D7DU: 123.1, D7DT: 139.2, D7DV: 88.8 },
		{ date: "2017-10", D7DW: 116.8, D7DU: 123.1, D7DT: 142.3, D7DV: 89.7 },
		{ date: "2017-11", D7DW: 118.0, D7DU: 123.2, D7DT: 142.3, D7DV: 98.0 },
		{ date: "2017-12", D7DW: 118.4, D7DU: 123.2, D7DT: 142.3, D7DV: 105.6 },
		{ date: "2018-01", D7DW: 118.6, D7DU: 123.4, D7DT: 142.3, D7DV: 106.9 },
		{ date: "2018-02", D7DW: 118.6, D7DU: 123.4, D7DT: 142.3, D7DV: 105.1 },
		{ date: "2018-03", D7DW: 119.0, D7DU: 123.4, D7DT: 142.3, D7DV: 110.5 },
		{ date: "2018-04", D7DW: 118.8, D7DU: 123.7, D7DT: 143.5, D7DV: 110.9 },
		{ date: "2018-05", D7DW: 115.6, D7DU: 123.9, D7DT: 143.7, D7DV: 114.8 },
		{ date: "2018-06", D7DW: 115.3, D7DU: 126.9, D7DT: 146.9, D7DV: 113.7 },
		{ date: "2018-07", D7DW: 116.0, D7DU: 128.4, D7DT: 149.4, D7DV: 110.8 },
		{ date: "2018-08", D7DW: 116.2, D7DU: 128.4, D7DT: 149.4, D7DV: 112.2 },
		{ date: "2018-09", D7DW: 115.8, D7DU: 129.8, D7DT: 152.1, D7DV: 117.7 },
		{ date: "2018-10", D7DW: 120.0, D7DU: 132.5, D7DT: 155.2, D7DV: 126.2 },
		{ date: "2018-11", D7DW: 119.1, D7DU: 132.5, D7DT: 155.2, D7DV: 119.1 },
		{ date: "2018-12", D7DW: 121.5, D7DU: 132.5, D7DT: 155.2, D7DV: 111.6 },
		{ date: "2019-01", D7DW: 121.5, D7DU: 121.2, D7DT: 147.6, D7DV: 107.7 },
		{ date: "2019-02", D7DW: 121.6, D7DU: 121.4, D7DT: 147.8, D7DV: 110.1 },
		{ date: "2019-03", D7DW: 121.9, D7DU: 121.4, D7DT: 147.8, D7DV: 110.9 },
		{ date: "2019-04", D7DW: 119.9, D7DU: 132.6, D7DT: 163.8, D7DV: 111.4 },
		{ date: "2019-05", D7DW: 120.9, D7DU: 132.6, D7DT: 163.8, D7DV: 113.2 },
		{ date: "2019-06", D7DW: 121.6, D7DU: 132.6, D7DT: 163.8, D7DV: 108.7 },
		{ date: "2019-07", D7DW: 121.3, D7DU: 132.6, D7DT: 163.8, D7DV: 108.0 },
		{ date: "2019-08", D7DW: 120.5, D7DU: 132.6, D7DT: 163.8, D7DV: 109.7 },
		{ date: "2019-09", D7DW: 121.0, D7DU: 132.6, D7DT: 163.8, D7DV: 109.8 },
		{ date: "2019-10", D7DW: 122.8, D7DU: 121.0, D7DT: 160.3, D7DV: 113.8 },
		{ date: "2019-11", D7DW: 125.8, D7DU: 121.0, D7DT: 160.3, D7DV: 110.3 },
		{ date: "2019-12", D7DW: 126.4, D7DU: 121.0, D7DT: 160.3, D7DV: 110.4 },
		{ date: "2020-01", D7DW: 125.3, D7DU: 121.0, D7DT: 160.3, D7DV: 114.1 },
		{ date: "2020-02", D7DW: 126.7, D7DU: 121.0, D7DT: 160.3, D7DV: 101.5 },
		{ date: "2020-03", D7DW: 126.7, D7DU: 121.0, D7DT: 160.3, D7DV: 83.4 },
		{ date: "2020-04", D7DW: 126.6, D7DU: 116.6, D7DT: 160.6, D7DV: 64.8 },
		{ date: "2020-05", D7DW: 126.6, D7DU: 116.8, D7DT: 160.6, D7DV: 60.7 },
		{ date: "2020-06", D7DW: 126.4, D7DU: 116.8, D7DT: 160.6, D7DV: 70.9 },
		{ date: "2020-07", D7DW: 126.9, D7DU: 116.6, D7DT: 160.4, D7DV: 71.5 },
		{ date: "2020-08", D7DW: 125.9, D7DU: 116.6, D7DT: 160.4, D7DV: 71.3 },
		{ date: "2020-09", D7DW: 127.0, D7DU: 116.6, D7DT: 160.4, D7DV: 68.3 },
		{ date: "2020-10", D7DW: 128.8, D7DU: 102.4, D7DT: 155.2, D7DV: 71.3 },
		{ date: "2020-11", D7DW: 130.6, D7DU: 102.4, D7DT: 155.2, D7DV: 67.5 },
		{ date: "2020-12", D7DW: 130.2, D7DU: 102.4, D7DT: 155.2, D7DV: 79.6 },
		{ date: "2021-01", D7DW: 130.3, D7DU: 102.4, D7DT: 155.2, D7DV: 85.7 },
		{ date: "2021-02", D7DW: 130.1, D7DU: 102.4, D7DT: 155.2, D7DV: 92.2 },
		{ date: "2021-03", D7DW: 130.6, D7DU: 102.4, D7DT: 155.2, D7DV: 94.8 },
		{ date: "2021-04", D7DW: 130.4, D7DU: 112.0, D7DT: 169.4, D7DV: 90.6 },
		{ date: "2021-05", D7DW: 130.3, D7DU: 112.0, D7DT: 169.4, D7DV: 94.8 },
		{ date: "2021-06", D7DW: 130.6, D7DU: 112.0, D7DT: 169.4, D7DV: 97.8 },
		{ date: "2021-07", D7DW: 130.6, D7DU: 112.0, D7DT: 169.7, D7DV: 98.3 },
		{ date: "2021-08", D7DW: 130.5, D7DU: 112.0, D7DT: 169.7, D7DV: 97.1 },
		{ date: "2021-09", D7DW: 131.2, D7DU: 112.4, D7DT: 169.7, D7DV: 101.5 },
		{ date: "2021-10", D7DW: 132.6, D7DU: 131.1, D7DT: 184.4, D7DV: 120.5 },
		{ date: "2021-11", D7DW: 133.1, D7DU: 131.1, D7DT: 184.4, D7DV: 125.0 },
		{ date: "2021-12", D7DW: 136.8, D7DU: 131.1, D7DT: 184.4, D7DV: 121.2 },
		{ date: "2022-01", D7DW: 137.5, D7DU: 131.3, D7DT: 185.0, D7DV: 125.9 },
		{ date: "2022-02", D7DW: 140.0, D7DU: 131.3, D7DT: 185.0, D7DV: 140.8 },
		{ date: "2022-03", D7DW: 144.9, D7DU: 131.3, D7DT: 185.0, D7DV: 202.8 },
		{ date: "2022-04", D7DW: 147.8, D7DU: 218.9, D7DT: 260.2, D7DV: 193.8 },
		{ date: "2022-05", D7DW: 152.0, D7DU: 218.9, D7DT: 260.2, D7DV: 211.1 },
		{ date: "2022-06", D7DW: 159.8, D7DU: 218.9, D7DT: 260.2, D7DV: 223.8 },
		{ date: "2022-07", D7DW: 165.8, D7DU: 219.1, D7DT: 261.3, D7DV: 210.4 },
		{ date: "2022-08", D7DW: 169.5, D7DU: 219.1, D7DT: 261.3, D7DV: 180.8 },
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
        // ... (add more data points)
        { date: "2022-09", D7DW: 150, D7DU: 100, D7DT: 200, D7DV: 120 }
    ];

    // Get references to DOM elements
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const fuelTypeSelect = document.getElementById('fuelType');
    const modeSelect = document.getElementById('mode');

    // Initialize Chart.js
    const ctx = document.getElementById('fuelChart').getContext('2d');
    const fuelChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dataset.map(entry => entry.date),
            datasets: []
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Function to update chart based on selected options
    function updateChart() {
        const selectedFuelType = fuelTypeSelect.value;
        const selectedMode = modeSelect.value;
        const filteredDataset = dataset.map(entry => ({ date: entry.date, value: entry[selectedFuelType] }));

        if (selectedMode === 'historical') {
            const endIndex = dataset.findIndex(entry => entry.date === filteredDataset[filteredDataset.length - 1].date);
            fuelChart.data.datasets = [
                {
                    label: selectedFuelType,
                    data: filteredDataset.slice(0, endIndex + 1).map(entry => entry.value),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false
                }
            ];
        } else if (selectedMode === 'forecast') {
            // Forecasting logic using straight-line method
            const historicalData = filteredDataset.map(entry => entry.value);
            const slope = (historicalData[historicalData.length - 1] - historicalData[0]) / (historicalData.length - 1);
            const forecastedValues = Array.from({ length: 12 }, (_, i) => historicalData[historicalData.length - 1] + (i + 1) * slope);

            fuelChart.data.datasets = [
                {
                    label: selectedFuelType,
                    data: historicalData.concat(forecastedValues),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false
                }
            ];
        }

        fuelChart.update();
    }

    // Event listeners for buttons and select elements
    prevBtn.addEventListener('click', function () {
        const currentIndex = dataset.findIndex(entry => entry.date === fuelChart.data.labels[0]);
        if (currentIndex > 0) {
            fuelChart.data.labels.pop();
            fuelChart.data.labels.unshift(dataset[currentIndex - 1].date);
            updateChart();
        } else {
            alert("Cannot go back beyond January 1996");
        }
    });

    nextBtn.addEventListener('click', function () {
        const currentIndex = dataset.findIndex(entry => entry.date === fuelChart.data.labels[fuelChart.data.labels.length - 1]);
        if (currentIndex < dataset.length - 1) {
            fuelChart.data.labels.shift();
            fuelChart.data.labels.push(dataset[currentIndex + 1].date);
            updateChart();
        } else {
            alert("Cannot go forward beyond the current month");
        }
    });

    fuelTypeSelect.addEventListener('change', function () {
        updateChart();
    });

    modeSelect.addEventListener('change', function () {
        updateChart();
    });

    // Initial chart update
    updateChart();
});
