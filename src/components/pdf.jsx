import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
  },
  section: {
    backgroundColor: "gainsboro",
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px",
  },
});
export default function Pdf({ data, date }) {
  let allPlus = 0;
  if (data instanceof Array && data.length > 0) {
    const Plus = data.reduce((all, item) => {
      let paona = parseInt(item["paona"]);
      if (paona < 0) {
        console.log("ok");
        return;
      }
      if (paona > 0) {
        return all + paona;
      }
      return all;
    }, 0);

    allPlus = Plus;
  }
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.section}>
          {date && <Text>
            {date["name"]} {date["year"]}
          </Text>}
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: 1,
            padding: 4,
            fontWeight: "bold",
          }}>
          <View
            style={{
              width: "12.5%",
              border: "black",
              borderWidth: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{ fontSize: 15 }}>Name</Text>
          </View>
          <View
            style={{
              width: "12.5%",
              border: "black",
              borderWidth: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{ fontSize: 15 }}>Hazira</Text>
          </View>
          <View
            style={{
              width: "12.5%",
              border: "black",
              borderWidth: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{ fontSize: 15 }}>Rate</Text>
          </View>
          <View
            style={{
              width: "12.5%",
              border: "black",
              borderWidth: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{ fontSize: 15 }}>Mot</Text>
          </View>
          <View
            style={{
              width: "12.5%",
              border: "black",
              borderWidth: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{ fontSize: 15 }}>Khoraki</Text>
          </View>
          <View
            style={{
              width: "12.5%",
              border: "black",
              borderWidth: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{ fontSize: 15 }}>Barti </Text>
          </View>
          <View
            style={{
              width: "12.5%",
              border: "black",
              borderWidth: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{ fontSize: 10 }}>Goto masa paona</Text>
          </View>
          <View
            style={{
              width: "12.5%",
              border: "black",
              borderWidth: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{ fontSize: 15 }}>Paona</Text>
          </View>
        </View>

        {/* map style */}

        {data instanceof Array && data.length>0 && data.map((item, i) => {
          return (
            <View key={item["id"]}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  gap: 1,
                  padding: 4,
                }}>
                <View
                  style={{
                    width: "12.5%",
                    border: "black",
                    borderWidth: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Text style={{ fontSize: 10 }}>{item["name"]}</Text>
                </View>
                <View
                  style={{
                    width: "12.5%",
                    border: "black",
                    borderWidth: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Text style={{ fontSize: 15 }}>{item["hazira"]}</Text>
                </View>
                <View
                  style={{
                    width: "12.5%",
                    border: "black",
                    borderWidth: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Text style={{ fontSize: 15 }}>{item["rate"]}</Text>
                </View>
                <View
                  style={{
                    width: "12.5%",
                    border: "black",
                    borderWidth: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Text style={{ fontSize: 15 }}>{item["mot"]}</Text>
                </View>
                <View
                  style={{
                    width: "12.5%",
                    border: "black",
                    borderWidth: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Text style={{ fontSize: 15 }}>{item["khoraki"]}</Text>
                </View>
                <View
                  style={{
                    width: "12.5%",
                    border: "black",
                    borderWidth: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Text style={{ fontSize: 15 }}>{item["barti"]}</Text>
                </View>
                <View
                  style={{
                    width: "12.5%",
                    border: "black",
                    borderWidth: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Text style={{ fontSize: 15 }}>{item["gotoMas"]}</Text>
                </View>
                <View
                  style={{
                    width: "12.5%",
                    border: "black",
                    borderWidth: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <Text style={{ fontSize: 15 }}>{item["paona"]}</Text>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  backgroundColor: "blue",
                  height: 1,
                }}></View>
            </View>
          );
        })}

        <View
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            fontSize: 15,
            backgroundColor: "#d6d4d4",
            padding: 5,
            marginTop:5
          }}>
          <Text>Total:{allPlus}</Text>
        </View>
      </Page>
    </Document>
  );
}
